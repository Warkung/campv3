export type ButtonFormProps = {
  title: string;
  size?: "default" | "sm" | "icon" | "lg";
  Classname?: string;
  type: "button" | "submit";
};

export type FormContainerProps = {
  children: React.ReactNode;
  action: (prevState: any, formData: FormData) => Promise<{ message: string }>;
};

export type InputFormProps = {
  title: string;
  type: string;
  placeholder: string;
  name: string;
};
