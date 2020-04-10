import styled from "styled-components";

export const RecipeTabs = styled.div`
    padding: 20px 35px;
    font-size: 16px;
    border-left: 1px solid #e3e3e3;
    background-color: ${props => props.toggle?"#8dc63f":"#f2f2f2"};
    box-shadow: inset 0 -1px 0 0 rgba(50,50,50,.08);
    text-align: center;
    color: ${props => props.toggle?"white":"gray"};
    transition: all .2s ease-in-out;
`;

export const SliderWrapper = styled.div`
    background-image: url('${props => props.img}');
    width: 100%;
    /* height: 20px; */
    transition: 1s ease-in;

`;
export const RecipeDetails =styled.div`
    display: flex;
`;