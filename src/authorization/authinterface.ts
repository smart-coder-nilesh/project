export interface LoginRequest {
    Username: string;
    Password: string;
}

export interface LoginResponse {
    token: string;
}

export interface AuthContextType {
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
}

