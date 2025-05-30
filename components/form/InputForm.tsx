"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type InputFormProps = {
  title: string;
  type: string;
  placeholder: string;
  name: string;
};

function InputForm({ title, type, placeholder, name }: InputFormProps) {
  return (
    <div className="flex flex-col mb-4 gap-1">
      <Label htmlFor={name} className="font-medium text-xl">
        {title}
      </Label>
      <Input type={type} name={name} id={name} placeholder={placeholder} />
    </div>
  );
}
export default InputForm;
