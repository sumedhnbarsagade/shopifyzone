import React from "react";

const HomeSectionProductCards = ({product}) => {
    return (
        <div className="cursor-pointer flex flex-col item-center bg-white 
        rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-gray-100">
            <div className="h-[13rem] w-[1-rem">
                <img className="object-cover object-top w-full h-full" src={product.imageUrl} alt="" />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
                <p className="mt-2 text-sm text-gray-500">{product.title}</p>
            </div>
        </div>
    )
}

export default HomeSectionProductCards;