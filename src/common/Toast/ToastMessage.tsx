import React from 'react';
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from 'react-toastify';

interface ToastMessageProps {
    // Explicitly stating that it takes no props
    children?: never;
}

const defaultOptions: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
    transition: Zoom,
};

// Success Message
export const NotifySuccess = (message: string, options?: ToastOptions) => {
    toast.success(message, { ...defaultOptions, ...options });
};

// Error Message
export const NotifyError = (message: string, options?: ToastOptions) => {
    toast.error(message, { ...defaultOptions, ...options });
};

// Warning Message
export const NotifyWarning = (message: string, options?: ToastOptions) => {
    toast.warn(message, { ...defaultOptions, ...options });
};

// Info Message
export const NotifyInfo = (message: string, options?: ToastOptions) => {
    toast.info(message, { ...defaultOptions, ...options });
};

// Toast Container Component
export const ToastMessage: React.FC<ToastMessageProps> = () => {
    return <ToastContainer {...(defaultOptions as any)} />;
};
