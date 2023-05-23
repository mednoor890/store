import React from "react";
import { BrandImg, BrandsContainer, ImgWrapper } from "./TopBrands.styled";
import { DealsTitle } from "../Deals/Deals.styled";
import Amd from '../../assets/amd.jpg';
import Aorus from '../../assets/aorus.jpg';
import Apple from '../../assets/apple.jpg';
import Asus from '../../assets/asus.jpg';
import Epson from '../../assets/epson.jpg';
import Gigabyte from '../../assets/gigabyte.jpg';
import Gree from '../../assets/gree.jpg';
import Huawei from '../../assets/huawei.jpg';
import Intel from '../../assets/intel.jpg';
import Lenovo from '../../assets/lenovo.jpg';
import Mi from '../../assets/mi.jpg';
import Msi from '../../assets/msi.jpg';
import Nokia from '../../assets/nokia.jpg';
import OnePlus from '../../assets/oneplus.jpg';
import Oppo from '../../assets/oppo.jpg';
import Pny from '../../assets/pny.jpg';
import Samsung from '../../assets/samsung.jpg';
import Tcl from '../../assets/tcl.jpg';
import Telefunken from '../../assets/telefunken.jpg';
import Vivo from '../../assets/vivo.jpg'
import Whirlpool from '../../assets/whirlpool.jpg' 
const TopBrand :React.FC= () => {
    const brands=[
        {id:1,url:Amd,name:"Amd"},
        {id:2,url:Aorus,name:"Aorus"},
        {id:3,url:Apple,name:"Apple"},
        {id:4,url:Asus,name:"Asus"},
        {id:5,url:Epson,name:"Epson"},
        {id:6,url:Gigabyte,name:"Gigabyte"},
        {id:7,url:Gree,name:"Gree"},
        {id:8,url:Huawei,name:"Huawei"},
        {id:9,url:Intel,name:"Intel"},
        {id:10,url:Lenovo,name:"Lenovo"},
        {id:11,url:Mi,name:"Mi"},
        {id:12,url:Msi,name:"Msi"},
        {id:13,url:Nokia,name:"Nokia"},
        {id:14,url:OnePlus,name:"OnePlus"},
        {id:15,url:Oppo,name:"Oppo"},
        {id:16,url:Pny,name:"Pny"},
        {id:17,url:Samsung,name:"Samsung"},
        {id:18,url:Tcl,name:"Tcl"},
        {id:19,url:Telefunken,name:"Telefunken"},
        {id:20,url:Vivo,name:"Vivo"},
        {id:21,url:Whirlpool,name:"Whirlpool"},
    ]
  return <BrandsContainer>
  <DealsTitle>Top Elecronic Brands</DealsTitle>
  <ImgWrapper>
  {brands.map((brand)=>(
    <BrandImg key={brand.id} src={brand.url} alt={brand.name}/>
  ))
  
  }
  </ImgWrapper>
  </BrandsContainer>;
};
export default TopBrand;
