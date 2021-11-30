import React, {useState, useEffect} from "react";
import "./Category.css"
import styled from '@emotion/styled'

const CategoryContainer = styled.li `
    width: 100%;
    height: 200px;
    text-align: center;
`;
const UnSelected = styled.div`
    transition: 0.3s;
    background-color: #5599bb;
`;

const Selected = styled.div`
    transition: 0.3s;
    background-color: blue;
`;

export default function Category({setCategory}) {
    const [productCategories, setProductCategories] = useState([])
    let arrCategory = [];
    const fillCategories = () => {
        arrCategory = []
        productCategories.results.map((c, i) => {
            if(c.selected) {
                arrCategory.push(c.data.name.toLowerCase())
            }
        })
    }
    const handleAddCategory = (category) => {        
        category.selected = true;
        fillCategories()
        setProductCategories(productCategories)
        setCategory(arrCategory)

    }
    
    const handleRemoveCategory = (category) => {
        category.selected = false;
        fillCategories()
        setProductCategories(productCategories)
        setCategory(arrCategory);
    }
    
    useEffect(() => {
        if(!productCategories.results) {
            fetch('../../mocks/es-mx/product-categories.json')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setProductCategories(data)
            })    
        }
    })
    return (
        <div className="containerGridCategory">
            <h1>Categories</h1>
            <ul className="gridCategory">
            {productCategories && productCategories.results && productCategories.results.map( (category, index) => 
                <CategoryContainer key={category.id}>
                    {category.selected ? (
                    <Selected key={category.id}>
                        <span className="categoryName">{category.data.name}</span>
                        <img className="categoryImage" onClick={() => {handleRemoveCategory(category)}} title={category.data.name} src={category.data.main_image.url} alt={category.data.main_image.alt} />
                    </Selected>                 
                ) : (            
                    <UnSelected key={category.id}>
                        <span className="categoryName">{category.data.name}</span>
                        <img className="categoryImage" onClick={() => {handleAddCategory(category)}} title={category.data.name} src={category.data.main_image.url} alt={category.data.main_image.alt} />
                    </UnSelected>                    
                )}
                </CategoryContainer>        
            )}
            </ul>
        </div>
    )
}