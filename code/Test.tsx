import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

// Learn more: https://framer.com/api

export function Test(props) {
    const { tint, onTap } = props

    return (
        <Frame background="none" size="100%">
            <Frame
                size={150}
                radius={25}
                center={true}
                background={tint}
                style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                }}
                onTap={onTap}
                whileHover={{
                    scale: 1.25,
                    rotate: 90,
                    background: "#07F",
                }}
            />
        </Frame>
    )
}

Test.defaultProps = {
    height: 200,
    width: 200,
    tint: "#09F",
}

addPropertyControls(Test, {
    tint: {
        title: "Tint",
        type: ControlType.Color,
    },
    onTap: {
        type: ControlType.EventHandler,
    },
})
