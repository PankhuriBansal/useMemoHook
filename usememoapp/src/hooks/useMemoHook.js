import React, { useEffect, useRef } from 'react'

const useMemoCustomHook = (cb,deps) => {
    // initialize the variable value
    const memoizedRef = useRef()
    // compare value of previously filled deps and new deps
    const areEqual = (prevDeps,nextDeps) => {
        if(prevDeps === null || prevDeps.length !== nextDeps.length) return false
        for(let i = 0;i<prevDeps.length;i++){
            if(prevDeps[i] !== nextDeps[i]) return false
        }
        return true
    }
    if(!memoizedRef.current || !areEqual(memoizedRef.current.deps,deps)){
        memoizedRef.current = {
            value: cb(),
            deps
        }
    }
    // cleanup logic for reinitializing the value of memoizedRef
    useEffect(() => {
        return () => {
            memoizedRef.current === null
        }
    },[])
    // return value
    return memoizedRef.current.value
}

export default useMemoCustomHook