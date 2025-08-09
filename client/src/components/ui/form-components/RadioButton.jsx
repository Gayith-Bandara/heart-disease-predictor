import { cn } from "../../../lib/utils";

const RadioButton = ({className,name,...props}) => {
  return (
    <input
      type="radio"
      name={name}
      className={cn(
        `relative size-4 appearance-none rounded-full border dark:border-white dark:bg-white border-gray-400 bg-gray-100 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-red-500 checked:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden`,
        className)}
      {...props} 
      />
    );
}

{/* <input id="push-email" name="push-notifications" type="radio"
              className="relative size-4 appearance-none rounded-full border dark:border-white dark:bg-white border-gray-400 bg-gray-100 before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-red-500 checked:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 disabled:border-white/5 disabled:bg-white/10 disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
            /> */}

export default RadioButton;