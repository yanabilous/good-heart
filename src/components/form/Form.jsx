import React, {useEffect, useRef, useState} from "react";
import {Controller, useForm} from "react-hook-form";




function Form({setIsFormValid, setFormData}) {
  // const primaryBtnText = "Допомогти";
  const {
    control,
    handleSubmit,
    getValues,
    formState: {errors, isValid}

  } = useForm();
  // eslint-disable-next-line no-unused-vars
  const [emailError, setEmailError] = useState("");
  useEffect(() => {
    // console.log(isValid);
    setFormData(getValues());
    setIsFormValid(isValid);

  }, [getValues, setFormData, setIsFormValid, isValid]);


  const onSubmitForm = (data) => {
    console.log(data);
  };
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("Завантажено зображення:", file);
  };

  return (
    <div className="wrapper_register">
      <form onSubmit={handleSubmit(onSubmitForm)} className="form">
        <div className="flex flex-left">
          <div className="row">
            <div className="input_area">
              <p className="label">Ім'я</p>
              <Controller
                name="firstName"
                control={control}
                defaultValue=""
                rules={{
                  pattern: {
                    value: /^[А-Яа-яЁёІіЇїЄєҐґa-zA-Z]+$/,
                    message: "Ім'я повинно містити лише букви."
                  }
                }}
                render={({field}) => (
                  <input
                    className="input"
                    type="text"
                    // placeholder="First name"
                    id="firstName"
                    {...field}
                    onChange={field.onChange}
                    value={field.value}
                    required
                  />
                )}
              />
              {errors.firstName && <span>First name is required</span>}
            </div>
            <div className="input_area mr-left">
              <p>Прізвище</p>
              <Controller
                name="lastName"
                control={control}
                defaultValue=""
                render={({field}) => (
                  <input
                    className="input"
                    type="text"
                    // placeholder="Last name"
                    id="lastName"
                    onChange={field.onChange}
                    value={field.value}
                    {...field}
                    required
                  />
                )}
                rules={{
                  pattern: {
                    value: /^[А-Яа-яЁёІіЇїЄєҐґa-zA-Z]+$/,
                    message:
                      "Last name should contain at least 2 letters and no other characters."
                  }
                }}
              />
              {errors.lastName && <span>{errors.lastName.message}</span>}
            </div>
          </div>

          <div className="input_area row-p">
            <p>Назва компанії, організації</p>
            <Controller
              name="companyName"
              control={control}
              defaultValue=""
              render={({field}) => (
                <input
                  className="input"
                  type="text"
                  id="companyName"
                  {...field}
                  onChange={field.onChange}
                  value={field.value}
                  required
                />
              )}
              rules={{
                pattern: {
                  value: /^[А-Яа-яЁёІіЇїЄєҐґa-zA-Z]{2,}$/,
                  message:
                    "Last name should contain at least 2 letters and no other characters."
                }
              }}
            />
            {errors.companyName && <span>{errors.companyName.message}</span>}

            <div className="input_logo">
              <input
                type="file"
                accept="image/*"
                ref={inputRef}
                style={{display: "none"}}
                onChange={handleFileChange}
              />
              <button onClick={handleClick}>+ Логотип</button>
            </div>
          </div>

          <div className="input_area">
            <p>Email-адрес</p>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({field}) => (
                <div className="">
                  <input
                    className="input"
                    type="email"
                    id="email"
                    {...field}
                    onChange={field.onChange}
                    value={field.value}
                    required
                  />
                  {errors.email && <span>{errors.email.message}</span>}
                </div>
              )}
              rules={{
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
                  message: "That is not a valid email."
                }
              }}
            />
          </div>
          <div className="input_area">
            <p>Номер телефону</p>
            <Controller
              name="telephone"
              control={control}
              defaultValue=""
              render={({field}) => (
                <input
                  className="input"
                  type="text"
                  id="telephone"
                  {...field}
                  onChange={field.onChange}
                  value={field.value}
                  required

                />
              )}
              rules={{
                pattern: {
                  value: /^\+[0-9]{12}$/,
                  message: "Це не є дійсним номером телефону. Будь ласка, включіть '+' і 12 цифр."
                }
              }}
            />
            {errors.telephone && <p>{errors.telephone.message}</p>}
          </div>

        </div>

        <div className="flex flex-right">
          <div className="input_area">

            <p>Країна</p>
            <Controller
              name="country"
              control={control}
              defaultValue=""
              rules={{
                pattern: {
                  value: /^[А-Яа-яЁёІіЇїЄєҐґa-zA-Z]+$/,
                  message: "Країна повинна містити лише букви"
                }
              }}
              render={({field}) => (
                <input
                  className="input"
                  type="text"
                  id="country"
                  {...field}
                  onChange={field.onChange}
                  value={field.value}
                  required
                />
              )}
            />
            {errors.country && <span>Country is required</span>}
          </div>
          <div className="row">
            <div className="input_area">
              <p>Місто</p>
              <Controller
                name="city"
                control={control}
                defaultValue=""
                render={({field}) => (
                  <input
                    className="input"
                    type="text"
                    id="city"
                    {...field}
                    onChange={field.onChange}
                    value={field.value}
                    required
                  />
                )}
                rules={{
                  pattern: {
                    value: /^[А-Яа-яЁёІіЇїЄєҐґa-zA-Z]+$/,
                    message:
                      "Last name should contain at least 2 letters and no other characters."
                  }
                }}
              />
              {errors.city && <span>{errors.city.message}</span>}
            </div>
            <div className="input_area mr-left">
              <p>Штат, район</p>
              <Controller
                name="state"
                control={control}
                defaultValue=""
                render={({field}) => (
                  <input
                    className="input"
                    type="text"
                    // placeholder="Last name"
                    id="state"
                    {...field}
                    onChange={field.onChange}
                    value={field.value}
                    required
                  />
                )}
                rules={{
                  pattern: {
                   value: /^[А-Яа-яЁёІіЇїЄєҐґa-zA-Z]+$/,
                    message:
                      "Last name should contain at least 2 letters and no other characters."
                  }
                }}
              />
              {errors.state && <span>{errors.state.message}</span>}
            </div>
          </div>

          <div className="input_area">
            <p>Адреса</p>
            <Controller
              name="address"
              control={control}
              defaultValue=""
              render={({field}) => (
                <div className="">
                  <input
                    className="input"
                    type="text"
                    id="address"
                    onChange={field.onChange}
                    value={field.value}
                    {...field}
                    required
                  />
                  {errors.address && <span>{errors.address.message}</span>}
                </div>
              )}
              rules={{
                pattern: {
                   value: /^[А-Яа-яЁёІіЇїЄєҐґa-zA-Z]{2,}$/,
                  message:
                    "Address should contain at least 2 letters and no other characters."
                }
              }}
            />
          </div>
          <div className="input_area w-h">
            <p>Поштовий індекс</p>
            <Controller
              name="postIndex"
              control={control}
              defaultValue=""
              rules={{
            pattern: {
              value: /^[А-Яа-яЁёІіЇїЄєҐґa-zA-Z]{2,}$/,
              message: "Поштовий індекс має містити щонайменше 2 цифри."
            }
          }}
              render={({field}) => (
                <input
                  className="input"
                  type="text"
                  // placeholder="Telephone"
                  id="postIndex"
                  onChange={field.onChange}
                  value={field.value}
                  {...field}
                  required

                />
              )}
            />
            {errors.postIndex && <p>{errors.postIndex.message}</p>}
          </div>
        </div>


        {/*<Button*/}
        {/*  buttonClick={onSubmitForm}*/}
        {/*  primaryBtnText={primaryBtnText}*/}
        {/*  disabled={false}*/}
        {/*  type="submit"*/}
        {/*/>*/}


      </form>
    </div>
  );
}

export default Form;
