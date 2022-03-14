import { FC } from 'react';
import clsx from 'clsx';

export const TheGuildLogo: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={clsx('flex items-center', className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 34 34"
      >
        <g fill="currentColor" fillRule="evenodd">
          <path d="M17.599 15.822l8.014-3.867v8.442c0 1-.538 1.932-1.404 2.432l-6.824 3.935-.63.345.008-.722v-2.993l5.616-3.242v-2.97l-4.78-1.36zm6.62-4.894L21.44 12.29 16.04 9.172l-5.402 3.118-3.477-1.706.668-.402a.312.312 0 0 1 .043-.028l6.764-3.906a2.856 2.856 0 0 1 2.808 0l7.485 4.343-.71.337zM9.7 13.536v6.615l5.53 3.194v3.733l-7.36-4.249a2.817 2.817 0 0 1-1.404-2.432V11.95l3.234 1.586zm8.892 17.762c0 .133-.014.263-.034.39l-.007.048a2.555 2.555 0 0 1-2.512 2.114 2.556 2.556 0 0 1-2.416-1.735l-10.62-6.132a3.403 3.403 0 0 1-1.702-2.947V12.709a3.895 3.895 0 0 0 2.382.04v10.287c0 .363.196.702.51.884l9.908 5.72a2.546 2.546 0 0 1 3.993.15l.025.033c.033.046.063.094.093.142l.034.056a2.406 2.406 0 0 1 .166.343 2.464 2.464 0 0 1 .075.217c.012.04.021.079.031.118l.026.112c.01.05.016.1.023.15.003.03.01.059.012.089.008.081.013.164.013.248zM31.654 9.004c0 .765-.34 1.452-.876 1.92v12.112c0 1.216-.648 2.34-1.702 2.947l-9.124 5.268a3.888 3.888 0 0 0-.785-2.298l8.718-5.033c.315-.182.51-.52.51-.884V11.455a2.555 2.555 0 0 1-1.846-2.451c0-.566.187-1.088.5-1.512l.015-.02c.06-.078.122-.154.19-.225l.009-.01c.14-.146.296-.274.467-.383l.055-.034c.068-.04.137-.078.208-.113l.063-.03a2.55 2.55 0 0 1 1.046-.226 2.555 2.555 0 0 1 2.552 2.553zM26.92 5.755l.012.007-.012-.007zM1.302 11.226A2.553 2.553 0 0 1 0 9.004 2.556 2.556 0 0 1 2.553 6.45c.365 0 .711.078 1.026.217L14.338.456a3.402 3.402 0 0 1 3.404 0l9.178 5.3a3.934 3.934 0 0 0-1.486 1.892L16.55 2.519a1.018 1.018 0 0 0-1.02 0L5.064 8.561a2.554 2.554 0 0 1-1.633 2.836l-.023.008a2.515 2.515 0 0 1-.236.072l-.048.012c-.073.017-.149.03-.224.04a2.57 2.57 0 0 1-.348.027c-.104 0-.206-.008-.307-.02-.027-.003-.054-.008-.08-.012a2.548 2.548 0 0 1-.23-.046l-.07-.018a2.56 2.56 0 0 1-.564-.234z" />
        </g>
      </svg>
      <span className="ml-2.5 text-[15px] font-bold text-[#fcfcfc]">
        THE GUILD
      </span>
    </div>
  );
};
