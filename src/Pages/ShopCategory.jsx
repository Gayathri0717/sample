import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assests/dropdown_icon.png'
// import Item from '../Components/Item/Item'
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  console.log("all_product:", all_product);

  console.log("props.category:", props.category);
  // console.log("item.category:", item.category);



  return (
    <div className='shop-category'>
      <img className='shopcategory-banner'src={props.banner} alt="" />
      <div className='shopcategory-indexsort'>
        <p><span>Showing 1-12</span>out of 36 products</p>
        <div className="shopcategory-sort">Sort by
          <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className='shopcategory-products'>
        {all_product.map((product,i) => {
          console.log("product.category:", product.category);
          if (props.category===product.category) {
            return <Item key={i} id={product.id} name={product.name} image={product.image} new_price={product.new_price} old_price={product.old_price} />
          }
        else{
          return null;
        }
        })}


      </div>
      <div className="shocategory-loadmore">
        Explore More
      </div>
    </div>

  )
}

export default ShopCategory
// import React, { useContext } from 'react';
// import './CSS/ShopCategory.css';
// import { ShopContext } from '../Context/ShopContext';
// import dropdown_icon from '../Components/Assests/dropdown_icon.png';
// import Item from '../Components/Item/Item';

// const ShopCategory = (props) => {
//   const { all_product } = useContext(ShopContext);
//   console.log("all_product:", all_product);
//   console.log("props.category:", props.category);

//   return (
//     <div className='shop-category'>
//       <img src={props.banner} alt="" />
//       <div className='shopcategory-indexsort'>
//         <p><span>Showing 1-12</span>out of 36 products</p>
//         <div className="shopcategory-sort">Sort by
//           <img src={dropdown_icon} alt="" />
//         </div>
//       </div>
//       <div className='shopcategory-products'>
//         {all_product.map((product, i) => {
//           // Log information for each product
//           console.log("product.category:", product.category);

//           if (props.category===product.category) {
//             return <Item key={i} />;
//           } else {
//             return <p>No match found for category: {props.category}</p>;
//           }
          
//         })}
//       </div>
//     </div>
//   );
// };

// export default ShopCategory;
