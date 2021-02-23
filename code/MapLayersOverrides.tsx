import { Override, Data } from "framer"

const data = Data({
    isShowingWaypoints: false,
})

export function toggleWaypoints(): Override {
    return {
        onToggle: (state) => {
            data.isShowingWaypoints = !data.isShowingWaypoints
        },
    }
}

export function toggleWaypointPlacement(): Override {
    return {}
}

export function toggleVisibilityOnWaypoints(): Override {
    return {
        animate: {
            opacity: data.isShowingWaypoints ? 1 : 0,
        },
    }
}
