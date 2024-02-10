import Image from "next/image";
import styles from "./singleUser.module.css";

const SingleUserPage = async ({ params }) => {
  // const { id } = params;
  // const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={"/noavatar.png"} alt="" fill />
        </div>
        {`John Doe`}
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="hidden" name="id" value={`123456`} />
          <label>Username</label>
          <input type="text" name="username" placeholder={`John Doe`} />
          <label>Email</label>
          <input type="email" name="email" placeholder={`john@gmail.com`} />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder={`0171586984`} />
          <label>Address</label>
          <textarea type="text" name="address" placeholder={`new york`} />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={``}>
              Yes
            </option>
            <option value={false} selected={``}>
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={``}>
              Yes
            </option>
            <option value={false} selected={``}>
              No
            </option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
