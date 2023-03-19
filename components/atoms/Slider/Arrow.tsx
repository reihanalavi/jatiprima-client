import React from 'react'
import cx from 'classnames'

interface ArrowProps {
    left?: boolean,
    right?: boolean,
    up?: boolean,
    down?: boolean,
    onClick?: any
}

export default function Arrow(props: Partial<ArrowProps>) {
    const {left, right, up, down, onClick} = props
    const classNames = cx({
        'slick-arrow fa ': true,
        'fa-angle-left': left,
        'fa-angle-right': right,
        'd-none': up || down,
    })
  return (
    <i className={classNames} onClick={onClick}></i>
  )
}
