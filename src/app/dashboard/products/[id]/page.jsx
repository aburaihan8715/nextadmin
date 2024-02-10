import Image from "next/image";
import styles from "./singleProduct.module.css";
const SingleProductPage = async ({ params }) => {
  // const { id } = params;
  // const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {`IPhone`}
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="hidden" name="id" value={`123`} />
          <label>Title</label>
          <input type="text" name="title" placeholder={`product title`} />
          <label>Price</label>
          <input type="number" name="price" placeholder={`$ 456`} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={`45`} />
          <label>Color</label>
          <input type="text" name="color" placeholder={`color`} />
          <label>Size</label>
          <textarea type="text" name="size" placeholder={`size`} />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea name="desc" id="desc" rows="10" placeholder={`product desc`}></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
