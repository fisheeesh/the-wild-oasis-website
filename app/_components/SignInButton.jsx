import { signInAction } from "../_lib/actions";

/**
 * ? We cannot do any interactivties in server components like in here we cannot add onClick event to the button.
 * ? Cuz this is a server component. 
 * ? But we can do that with the help of server actions which allows us to add interactivities to server components.
 * $ Usually form
 */
function SignInButton() {
  return (
    <form action={signInAction}>
      <button type="submit" className='flex cursor-pointer items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium'>
        <img
          src='https://authjs.dev/img/providers/google.svg'
          alt='Google logo'
          height='24'
          width='24'
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
