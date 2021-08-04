import styled from 'styled-components'

export const Item = styled.div`
    width: 288px;
    height: 278px;
    background-color: #FFF;
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


    img {
        width: 100%;
        height: 150px; 
        background-color: #d0d0d0;
        margin-bottom: 0;
    }

    button{
        width: 160px;
        height: 48px;
        border: 1px solid #7E7E7E;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: roboto;
        font-weight: 200;
        font-size: 24px;

        &:hover{
            cursor: pointer;
            background-color: #548CA8;
            color: #FFF;
        }
    }
`;

