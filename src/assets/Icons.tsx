import colorSet from "src/styles/colorSet";

interface IconProps {
  size?: string;
  color?: string;
}

export const Search = ({ size, color }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size ?? "24px"}
      height={size ?? "24px"}
      fill={color ?? colorSet.colorless}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
  );
};

export const Account = ({ size, color }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      viewBox="0 0 24 24"
      width={size ?? "24px"}
      height={size ?? "24px"}
      fill={color ?? colorSet.colorless}
    >
      <g>
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z" />
      </g>
    </svg>
  );
};

export const Github = ({ size, color }: IconProps) => {
  return (
    <svg
      width={size ?? "24px"}
      height={size ?? "24px"}
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
        transform="scale(64)"
        fill={color ?? colorSet.colorless}
      />
    </svg>
  );
};

export const PlayStore = ({ size, color }: IconProps) => (
  <svg
    width={size ?? "24px"}
    height={size ?? "24px"}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1.84102V28.1576C1.00018 28.2147 1.01729 28.2705 1.0492 28.318C1.08111 28.3654 1.1264 28.4024 1.17937 28.4244C1.23235 28.4464 1.29067 28.4523 1.347 28.4414C1.40334 28.4305 1.45519 28.4033 1.49606 28.3632L15.2693 15L1.49606 1.63545C1.45519 1.59536 1.40334 1.56817 1.347 1.55728C1.29067 1.5464 1.23235 1.55231 1.17937 1.57426C1.1264 1.59622 1.08111 1.63324 1.0492 1.6807C1.01729 1.72815 1.00018 1.78393 1 1.84102ZM21.0444 9.509L3.77444 0.0430562L3.76367 0.0370295C3.46617 -0.123683 3.18347 0.276759 3.42713 0.509791L16.9648 13.3882L21.0444 9.509ZM3.42848 29.4902C3.18347 29.7232 3.46617 30.1237 3.76502 29.963L3.77579 29.9569L21.0444 20.491L16.9648 16.6105L3.42848 29.4902ZM28.0161 13.3259L23.1935 10.6835L18.659 15L23.1935 19.3145L28.0161 16.6741C29.328 15.9529 29.328 14.0471 28.0161 13.3259Z"
      fill={color ?? colorSet.colorless}
    />
  </svg>
);

export const AppStore = ({ size, color }: IconProps) => (
  <svg
    width={size ?? "24px"}
    height={size ?? "24px"}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1811_9)">
      <path
        d="M26.7857 0H3.21429C1.43973 0 0 1.43973 0 3.21429V26.7857C0 28.5603 1.43973 30 3.21429 30H26.7857C28.5603 30 30 28.5603 30 26.7857V3.21429C30 1.43973 28.5603 0 26.7857 0ZM8.50446 23.6049C8.13616 24.2478 7.3125 24.4621 6.67634 24.0937C6.03348 23.7254 5.8192 22.9018 6.1875 22.2656L7.14509 20.6116C8.22321 20.2835 9.10714 20.5379 9.79688 21.375L8.50446 23.6049ZM17.8058 19.9955H5.625C4.88839 19.9955 4.28571 19.3929 4.28571 18.6562C4.28571 17.9196 4.88839 17.317 5.625 17.317H9.04018L13.4196 9.73661L12.0469 7.36607C11.6786 6.72321 11.8996 5.90625 12.5357 5.53795C13.1786 5.16964 13.9955 5.39062 14.3638 6.02679L14.9598 7.05803L15.5558 6.02679C15.9241 5.38393 16.7478 5.16964 17.3839 5.53795C18.0268 5.90625 18.2411 6.72991 17.8728 7.36607L12.1272 17.317H16.2857C17.6384 17.317 18.3951 18.904 17.8058 19.9955ZM24.375 19.9955H22.433L23.7455 22.2656C24.1138 22.9085 23.8929 23.7254 23.2567 24.0937C22.6138 24.4621 21.7969 24.2411 21.4286 23.6049C19.2254 19.7946 17.5781 16.9286 16.4732 15.0268C15.3549 13.0848 16.1518 11.1429 16.9487 10.4866C17.8259 12.0067 19.1384 14.2835 20.8929 17.317H24.375C25.1116 17.317 25.7143 17.9196 25.7143 18.6562C25.7143 19.3996 25.1116 19.9955 24.375 19.9955Z"
        fill={color ?? colorSet.colorless}
      />
    </g>
    <defs>
      <clipPath id="clip0_1811_9">
        <rect width="30" height="30" fill={color ?? colorSet.colorless} />
      </clipPath>
    </defs>
  </svg>
);

export const Close = ({ size, color }: IconProps) => {
  return (
    <svg
      width={size ?? "24px"}
      height={size ?? "24px"}
      fill={color ?? colorSet.colorless}
      viewBox="0 0 27 27"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M26.626 3.01977L23.9822 0.376022L13.501 10.8573L3.01973 0.376022L0.375977 3.01977L10.8572 13.501L0.375977 23.9823L3.01973 26.626L13.501 16.1448L23.9822 26.626L26.626 23.9823L16.1447 13.501L26.626 3.01977Z" />
    </svg>
  );
};

export const Arrow = ({ size, color }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size ?? "24px"}
      viewBox="0 0 24 24"
      width={size ?? "24px"}
      fill={color ?? colorSet.colorless}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </svg>
  );
};

export const Download = ({ size, color }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size ?? "24px"}
      viewBox="0 0 24 24"
      width={size ?? "24px"}
      fill={color ?? colorSet.colorless}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
    </svg>
  );
};

export const SmallArrow = ({ size, color }: IconProps) => {
  return (
    <svg
      width={size ?? "24px"}
      height={size ?? "24px"}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 6.00024L19.5 15.0002L10.5 24.0002"
        stroke={color ?? colorSet.colorless}
        strokeWidth="2"
      />
    </svg>
  );
};
