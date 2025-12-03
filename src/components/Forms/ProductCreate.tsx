'use client';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function ProductCreate() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: any) => {
    setMessage(null);
    setError(null);

    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (!res.ok) {
        setError(result.message || 'Something went wrong!');
        return;
      }

      setMessage(result.message || 'Success!');
      reset();
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

      {message && (
        <div className="p-3 bg-green-200 text-green-950 rounded">
          {message}
        </div>
      )}

      {error && (
        <div className="p-3 bg-red-200 text-red-900 rounded">
          {error}
        </div>
      )}

      <div className="flex border-red-500 gap-4 mt-3 mb-8 w-full">
        <div>
          <label className="block">Brand Name</label>
          <input type="text" className="border p-2" placeholder="Brand name..." {...register('brandName', { required: true })} />
        </div>
        <div>
          <label className="block">Product Description</label>
          <input type="text" className="border p-2" placeholder="Description..." {...register('description', { required: true })} />
        </div>
        <div>
          <label className="block">Quantity</label>
          <input type="text" className="border p-2" placeholder="Quantity..." {...register('quantity', { required: true })} />
        </div>
        <div>
          <label className="block">&nbsp;</label>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Save Product
          </button>
        </div>
      </div>
    </form>
  );
}