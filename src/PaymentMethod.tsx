import { ImagePlus } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./Store/store";

const PaymentMethod = () => {

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };
    const paymentFacilities = [
        'UPI Payment',
        'Cash',
        'Credit Card',
        'Cheque',
    ];
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'online' | 'Cash'>('online');
    const isDarkMode = useSelector((state: RootState) => state.toggleDarkmode.isDarkMode);
    return (
        <>
        
            <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                    onClick={() => setSelectedPaymentMethod('online')}
                    className={`p-4 rounded-lg transition-all ${selectedPaymentMethod === 'online'
                        ? `${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'} text-white shadow-lg shadow-blue-500/50`
                        : `${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-blue-50 hover:bg-blue-100'} ${isDarkMode ? 'text-white' : 'text-gray-800'}`
                        }`}
                >
                    <h3 className="font-semibold mb-2">Online Payment</h3>
                </button>
                <button
                    onClick={() => setSelectedPaymentMethod('Cash')}
                    className={`p-4 rounded-lg transition-all ${selectedPaymentMethod === 'Cash'
                        ? `${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'} text-white shadow-lg shadow-blue-500/50`
                        : `${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-blue-50 hover:bg-blue-100'} ${isDarkMode ? 'text-white' : 'text-gray-800'}`
                        }`}
                >
                    <h3 className="font-semibold mb-2">UPI</h3>
                </button>
            </div>
            {/*  */}
            <div className={`w-full lg:w-72 border-l ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} pl-6`}>
                <h3 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Payment Details</h3>
                <select className={`w-full p-2 border rounded-lg mb-4 ${isDarkMode
                    ? 'bg-gray-800 border-gray-700 text-white'
                    : 'bg-white border-gray-300 text-gray-800'
                    }`}>
                    <option>Select payment facility</option>
                    {paymentFacilities.map((facility, index) => (
                        <option key={index}>{facility}</option>
                    ))}
                </select>

                <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Amount</h3>
                <input
                    type="text"
                    placeholder="Lock cheating"
                    className={`w-full p-2 border rounded-lg mb-4 ${isDarkMode
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500'
                        : 'bg-white border-gray-300 text-gray-800'
                        }`}
                />

                {/* Image Upload Section */}
                <div className="mb-4">
                    <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Payment Proof</h3>
                    <div className={`border-2 border-dashed rounded-lg p-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-300'
                        } text-center cursor-pointer relative`}>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        {selectedImage ? (
                            <div className="relative">
                                <img
                                    src={selectedImage}
                                    alt="Payment proof"
                                    className="max-h-32 mx-auto rounded-lg"
                                />
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                                >
                                    ×
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center">
                                <ImagePlus className={`w-8 h-8 mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    Upload payment proof
                                </p>
                                <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                                    Click or drag image here
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex justify-between mt-8">
                    <button className="px-6 py-2 bg-blue-500 text-white rounded-lg">Verify</button>
                    <button className={`px-6 py-2 border rounded-lg ${isDarkMode
                        ? 'border-gray-700 text-gray-300'
                        : 'border-gray-300 text-gray-800'
                        }`}>Cancel</button>
                </div>
            </div>
        </>
    );
};

export default PaymentMethod;