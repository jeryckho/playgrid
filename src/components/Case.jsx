import React from 'react';

const Case = (props) => {
    const style = { fillOpacity: 0.01, strokeOpacity: 0.01, stroke: 'black', strokeWidth: 2 };
    if (props.show) {
        style.strokeOpacity = 1;
    }
    if (props.sel) {
        style.strokeOpacity = 1;
        style.strokeDasharray = "10,10";
        style.strokeWidth = 5;
    }

    return (
        <g onClick={props.onClick}>
            <rect
                x={props.x}
                y={props.y}
                width={props.width}
                height={props.height}
                style={style}
            />
            <text
                x={props.x + props.width / 2}
                y={props.y + props.height / 2}
                style={{ textAnchor: "middle", dominantBaseline: "central" }}
                fontFamily="Verdana"
                fontSize="75"
            >
                {props.content}
            </text>
        </g>
    );
};

export default Case;