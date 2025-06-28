"use client";

import { useRouter } from "next/navigation";

export default function PaymentGateway() {
  const router = useRouter();

  const handleCancel = () => router.push("/payment-cancel");
  const handleProceed = () => router.push("/payment-success");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-indigo-100 via-indigo-200 to-indigo-300 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700">
          درگاه پرداخت تستی
        </h2>
        <div className="flex justify-center gap-6">
          <button
            onClick={handleCancel}
            className="cursor-pointer px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            انصراف
          </button>
          <button
            onClick={handleProceed}
            className="cursor-pointer px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            پرداخت
          </button>
        </div>
      </div>
    </div>
  );
}
