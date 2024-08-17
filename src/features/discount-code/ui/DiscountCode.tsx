import { FC } from 'react';
import { TextInput } from '@mantine/core';
import { useForm } from 'react-hook-form';

interface FormInputs {
  discountCode: string;
}

export const DiscountCode: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 m-2">
      <TextInput
        label="Discount Code"
        error={errors.discountCode?.message}
        {...register('discountCode', { pattern: { value: /^DISCOUNT2024$/, message: 'Code is not correct' } })}
      />
    </form>
  );
};
