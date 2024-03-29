import React from "react";

interface DoneIconProps {
    props?: string;
}

const Done: React.FC<DoneIconProps> = ({ props }) => {
    return (
        <svg
            width={16}
            height={12}
            fill="transparent"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1 6l4.667 5L15 1"
                stroke={props || "#4A61DD"}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default Done;