import { Button, TextInput } from '@mantine/core';
import { FC, useState } from 'react';

export const DiscountCodeGenerator: FC = () => {
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);

  const generateDiscountCode = () => {
    const newCode = 'NEWCODE123'; // Simulate code generation
    setGeneratedCode(newCode);
  };

  return (
    <div className="flex flex-col gap-2 m-4">
      <Button onClick={generateDiscountCode}>Generate Discount Code</Button>
      {generatedCode && (
        <TextInput
          label="Generated Discount Code"
          value={generatedCode}
          readOnly
        />
      )}
    </div>
  );
};
