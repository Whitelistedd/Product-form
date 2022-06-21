import Product1Image from './assets/images/kingdice_box_final-f9u3.webp';
import Product4Image from './assets/images/mschalice_box_final-3z4h.webp';
import Product3Image from './assets/images/mugmanv2_box_final-7ukm.webp';
import Product2Image from './assets/images/thedevil_box_final-5xxo.webp';

export const AllProducts = [
    {
        productImage: Product1Image,
        productName: "King Dice"
    },
    {
        productImage: Product2Image,
        productName: "The Devil"
    },
    {
        productImage: Product3Image,
        productName: "Mugman V2"
    },
    {
        productImage: Product4Image,
        productName: "Ms. Chalice"
    },
] 

export const FormRegex = {
    email: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i,
    phone: /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/i,
}