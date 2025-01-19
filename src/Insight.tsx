import { useRef, useState, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./Store/store";

const insights = () => {

    const paymentInsights = {
        bankBalance: 250000,
        breakdown: {
            maintenance: 150000,
            fine: 25000,
            interest: 75000
        },
        monthlyData: [
            { month: 'Jan', fine: 100, actual: 35000 },
            { month: 'Feb', fine: 200, actual: 48000 },
            { month: 'Mar', fine: 300, actual: 49000 },
            { month: 'Apr', fine: 500, actual: 20000 },
            { month: 'May', fine: 10000, actual: 46000 },
            { month: 'Jun', fine: 5000, actual: 25000 }
        ]
    };
    const isDarkMode = useSelector((state: RootState) => state.toggleDarkmode.isDarkMode);
   
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [svgWidth, setSvgWidth] = useState(700);
    useLayoutEffect(() => {
        const updateSvgWidth = () => {
          if (svgRef.current) {
            const parentWidth = svgRef.current.parentElement?.getBoundingClientRect().width;
            if (parentWidth) {
              setSvgWidth(parentWidth);
            } else {
              setSvgWidth(svgRef.current.clientWidth);
            }
          }
        };
    
        updateSvgWidth(); // Set the initial width
    
        // Optional: Update width on window resize
        window.addEventListener('resize', updateSvgWidth);
    
        return () => {
          window.removeEventListener('resize', updateSvgWidth);
        };
      }, []);
    return (

        <>
            <div className="space-y-8">
                <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                    <div className="text-center mb-8">
                        <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                            ₹{paymentInsights.bankBalance.toLocaleString()}
                        </h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Bank Balance</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                            <p className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                ₹{paymentInsights.breakdown.maintenance.toLocaleString()}
                            </p>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Maintenance</p>
                        </div>
                        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                            <p className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                ₹{paymentInsights.breakdown.fine.toLocaleString()}
                            </p>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Fine</p>
                        </div>
                        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                            <p className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                ₹{paymentInsights.breakdown.interest.toLocaleString()}
                            </p>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Interest</p>
                        </div>
                    </div>

                    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <h4 className={`text-sm font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                            Maintenance Trends
                        </h4>
                        <div className="relative h-40">
                            {/* Grid lines */}
                            <div className="absolute inset-0 flex flex-col justify-between">
                                {[0, 1, 2, 3, 4].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-full h-px ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`}
                                    />
                                ))}
                            </div>

                            {/* Graph lines */}
                            <div className="parent absolute inset-0 flex items-end px-4">
                                <svg ref={svgRef} className="w-full h-full">
                                    {/* fine line */}
                                    <polyline
                                        points={paymentInsights.monthlyData
                                            .map((data, i) => `${(i * (svgWidth / paymentInsights.monthlyData.length))},${100 - (data.fine / 50000) * 100}`)
                                            .join(' ')}
                                        fill="none"
                                        stroke={isDarkMode ? '#60A5FA' : '#3B82F6'}
                                        strokeWidth="2"
                                        className="transition-all duration-300"
                                    />
                                    {/* Actual line */}
                                    <polyline
                                        points={paymentInsights.monthlyData
                                            .map((data, i) => `${(i * (svgWidth / paymentInsights.monthlyData.length))},${100 - (data.actual / 50000) * 100}`)
                                            .join(' ')}
                                        fill="none"
                                        stroke={isDarkMode ? '#4ADE80' : '#22C55E'}
                                        strokeWidth="2"
                                        className="transition-all duration-300"
                                    />
                                </svg>
                            </div>

                            {/* X-axis labels */}
                            <div className="absolute bottom-0 left-0 right-0 flex justify-between">
                                {paymentInsights.monthlyData.map((data, index) => {
                                    // Calculate the X position based on the width of the SVG and the index
                                    const xPosition = (index * (svgWidth / paymentInsights.monthlyData.length));

                                    return (
                                        <span
                                            key={index}
                                            className={`absolute text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                                            style={{
                                                left: `${xPosition}px`, // Position label based on calculated X value
                                            }}
                                        >
                                            {data.month}
                                        </span>
                                    );
                                })}
                            </div>

                        </div>

                        <div className="flex justify-center gap-4 mt-6">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                                <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Expected</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full" />
                                <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Actual</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


};

export default insights;