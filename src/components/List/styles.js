import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px;
  height: 50%;
 
  flex: 0 0 320px;

  align-content: center;
  
  
  

  .grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
}

.grid-template-rows-2 {
	grid-template-rows: 230px 230px;
}
.grid {
	max-width: 400px;
	margin: 0 auto;

}

h2 {
  text-align: center;
   margin: auto ;
   padding: auto;
   width: 514.94px;
   height: 68.66px;
   font-size:  'Nunito', 'Nunito', sans-serif;
   font-style: normal;
   font-weight: 700;
   font-size: 28px;
   line-height: 65px;

   color: #000000;

 }

 

  ul{
    margin-top: 50px;
  }
`;
