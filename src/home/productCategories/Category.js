import React, {useState, useEffect} from "react";
import "./Category.css"
import styled from '@emotion/styled'

const CategoryContainer = styled.li `
    width: 100%;
    height: 240px;
    text-align: center;
`;
const UnSelected = styled.div`
    transition: 0.3s;
    border-style: solid;
    border-width: thin;
    border-color: white;
    padding-left: 8px;
    padding-right: 8px;
    background-color: #282c34;
    
`;

const Selected = styled.div`
    transition: 0.3s;
    border-style: solid;
    border-width: thin;
    border-color: white;
    padding-left: 8px;
    padding-right: 8px;
    background-color: #5599bb;
`;

export default function Category({isLoadingCategories, arrCategory, setCategory}) {
    const [productCategories, setProductCategories] = useState([])

    const fillCategories = () => {
        let arrCategories = []
        productCategories.map((c, i) => {
            arrCategories.push(c)
            return null;
        })
        return arrCategories;
    }

    const handleAddCategory = (category, index) => {
        category.selected = true;
        let arrCategories = fillCategories();
        setProductCategories(arrCategories)
        setCategory(arrCategories)
    }
    
    const handleRemoveCategory = (category) => {
        category.selected = false;
        let arrCategories = fillCategories();
        setProductCategories(arrCategories)
        setCategory(arrCategories);
    }
    const removeFilters = () => {
        let arrCategories = [];
        productCategories.map((c, i) => {
            c.selected = false
            arrCategories.push(c)
            return null;
        })
        setProductCategories(arrCategories)
        setCategory(arrCategories);
    }
    useEffect(() => {
        if(!isLoadingCategories) {
            setProductCategories(arrCategory)  
        }
    })
    return (
        <div className="containerGridCategory">
            <h1>Categorias</h1>
            <ul className="gridCategory">
            {productCategories && productCategories.map( (category, index) => 
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
            <button className="btnCart" onClick={() => removeFilters()}>Eliminar Filtros</button>
        </div>
    )
}