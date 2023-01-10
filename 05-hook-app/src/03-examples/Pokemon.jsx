import React, { useLayoutEffect, useRef, useState } from 'react'

export const Pokemon = ({url, name}) => {

  return (
    <>
        <blockquote 
          className="blockquote text-end"
          style={{display: 'flex'}}
        >
          <p className="mb-1">{url}</p>
          <footer className="blockquote-footer">{ name }</footer>
        </blockquote>
    </>
  )
}
