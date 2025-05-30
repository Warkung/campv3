import createProfileAction from "@/actions/action";
import ButtonForm from "@/components/form/ButtonForm";
import FormContainer from "@/components/form/FormContainer";
import InputForm from "@/components/form/InputForm";

function CreatePage() {
  return (
    <section>
      <h1 className="text-xl font-bold capitalize text-center">new user</h1>
      <div className="p-8 border mt-5 max-w-md m-auto rounded-2xl">
        <FormContainer action={createProfileAction}>
          <div className="mb-5">
            <InputForm
              title="First Name:"
              type="text"
              name="firstName"
              placeholder="John"
            />
            <InputForm
              title="Last Name:"
              type="text"
              name="lastName"
              placeholder="Doe"
            />
            <InputForm
              title="Username:"
              type="text"
              name="username"
              placeholder="johndoe"
            />
          </div>
          <ButtonForm title="Create Profile" type="submit" size="lg" />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreatePage;
