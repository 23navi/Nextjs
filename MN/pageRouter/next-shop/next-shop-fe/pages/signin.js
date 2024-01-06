import Button from "../components/shared/Button";
import Field from "../components/shared/Field";
import Input from "../components/shared/Input";
// import Page from "../components/shared/Page";

function SignInPage() {
  return (
    <div title="Sign In" className="p-10">
      <form>
        <Field label="Email">
          <Input type="email" />
        </Field>
        <Field label="Password">
          <Input type="password" />
        </Field>
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
}

export default SignInPage;
