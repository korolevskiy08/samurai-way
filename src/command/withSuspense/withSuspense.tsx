import React, {FC, ReactNode} from "react";

export const withSuspense = (Component: any) => {
    return (props: any) => <React.Suspense fallback={<div>..loading</div>}>
        {Component}
    </React.Suspense>
}
