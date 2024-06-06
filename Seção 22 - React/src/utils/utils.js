import React from 'react';

export function childrenWithProps(props) {
    // props.children // Só é passado os props, deixando, por exemplo, apenas o nome ou o que foi passado
    // React.cloneElement(props.children, { ...props, ...props.children.props }) // Apenas 1 elemento

    return React.Children.map(props.children, child => {
        return React.cloneElement(child, { ...props, ...child.props })
    })
}