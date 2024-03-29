/**********************************************************************
Name: caroptions-response.dto.ts
Copyright © 2024 

Purpose:
This DTO will create a skeleton of our response when we call the /options/$id.
This id will be depending the car that was selected in step1.
This skeleton is based the information retrieve found in the file main.ts.

History
VERSION     AUTHOR    		  DATE 		      DETAIL					
1.0    	Ricardo Imperial 29/03/2024         DTO Response.		
***********************************************************************/
export type CarOptionsResponseDTO = {
  configs: CarOptionsDTO[];
  towHitch: boolean;
  yoke: boolean;
};

export type CarOptionsDTO = {
  id: number;
  description: string;
  range: number;
  speed: number;
  price: number;
};
