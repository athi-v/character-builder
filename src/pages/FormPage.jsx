import React, { useState } from "react";
import colorData from "../data/colorsdata.js";
import { MdErrorOutline, MdArrowBack } from "react-icons/md";
import ReactSelect from "react-select";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { occupationRender } from "../components/OccupationRender.jsx";

import Fhead from "../assets/f-head.png";
import Mhead from "../assets/m-head.png";
import FOhead from "../assets/old-f-head.png";
import MOhead from "../assets/old-m-head.png";

import Results from "../components/Results";
import Pants from "../components/Pants";
import Inputs from "../components/Inputs";

const maxSteps = 3;

const FormPage = () => {
  const [formPart, setFormPart] = useState(0);
  const [dob, setDob] = useState("");

  const {
    watch,
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const completedFormPart = () => {
    setFormPart((part) => part + 1);
  };

  const btnRender = () => {
    if (formPart > 2) {
      return undefined;
    } else if (formPart === 2) {
      return (
        <button className="bg-blue-400 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed">
          View Your Character
        </button>
      );
    } else {
      return (
        <button className="bg-blue-400 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed">
          Next
        </button>
      );
    }
  };

  const submitForm = (values) => {
    console.log(values);
    completedFormPart();
  };

  const prevStep = () => {
    setFormPart((part) => part - 1);
  };

  const ageRender = () => {
    var dates = new Date();
    var dobs = new Date(watch().dob);
    var age = dates.getFullYear() - dobs.getFullYear();
    var months = dates.getMonth() - dobs.getMonth();
    if (months < 0 || (months === 0 && dates.getDate() < dobs.getDate())) {
      age--;
    }
    console.log(age);
    return age;
  };

  const imageRender = () => {
    if (watch().gender === "male") {
      if (ageRender() < 40) {
        return <img src={Mhead} alt="male head" />;
      } else {
        return <img src={MOhead} alt="male head" />;
      }
    } else if (watch().gender === "female") {
      if (ageRender() < 40) {
        return <img src={Fhead} alt="male head" />;
      } else {
        return <img src={FOhead} alt="male head" />;
      }
    } else {
      return <p>No Image</p>;
    }
  };

  const dateValidation = () => {
    var dates = new Date();
    var dobs = new Date(watch().dob);
    var age = dates.getFullYear() - dobs.getFullYear();
    var months = dates.getMonth() - dobs.getMonth();
    if (months < 0 || (months === 0 && dates.getDate() < dobs.getDate())) {
      age--;
    }
    return age > 18;
  };

  return (
    <div className="section pt-5">
      <div className="container mx-auto max-w-[90%] lg:max-screen-lg">
        <div className="flex justify-between">
          <div className="text-3xl font-bold text-black">
            <Link to="/">Builder.abc</Link>
          </div>
          <div className="flex justify-center items-center bg-blue-500 text-white rounded p-2 hover:bg-blue-600 w-[150px]">
            <a
              href="https://github.com/athi-v/character-builder"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
        <div className="py-[100px] ">
          <div className="mx-auto text-center">
            <h1 className="text-black text-4xl font-medium">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-semibold ">
                Builder
              </span>
            </h1>
            <p className="text-lg text-gray-400">Let's build 🎉</p>
          </div>
          <div className="mx-auto w-full lg:max-w-[50%] shadow-xl">
            <div className="px-5 py-10">
              <form onSubmit={handleSubmit(submitForm)}>
                {formPart < maxSteps && (
                  <div>
                    {formPart > 0 && (
                      <button onClick={prevStep} type="button">
                        <MdArrowBack />
                      </button>
                    )}

                    <p>
                      {formPart + 1} of {maxSteps}
                    </p>
                  </div>
                )}

                {formPart >= 0 && (
                  <section className={formPart === 0 ? "block" : "hidden"}>
                    <h2 className="font-semibold text-3xl mb-8">
                      Your Details
                    </h2>
                    <div className="flex flex-col gap-2 pb-4">
                      <label htmlFor="fullname" className="font-semibold">
                        Name
                      </label>
                      <input
                        placeholder="Name"
                        type="text"
                        id="fullname"
                        className="border p-2 rounded"
                        {...register("fullname", {
                          required: {
                            value: true,
                            message: "Please enter your name",
                          },
                        })}
                      />
                      {errors.fullname && (
                        <p className="flex items-center gap-1 text-sm text-red-600">
                          <MdErrorOutline /> {errors.fullname.message}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-2 pb-4">
                      <label htmlFor="surname" className="font-semibold">
                        Surname
                      </label>
                      <input
                        placeholder="Surname"
                        type="text"
                        id="surname"
                        className="border p-2 rounded"
                        {...register("surname", {
                          required: {
                            value: true,
                            message: "Please enter your surname",
                          },
                        })}
                      />
                      {errors.surname && (
                        <p className="flex items-center gap-1 text-sm text-red-600">
                          <MdErrorOutline /> {errors.surname.message}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-2 pb-4">
                      <p className="font-semibold">Gender</p>

                      <div className="flex items-center gap-2">
                        <label htmlFor="male">Male</label>
                        <input
                          type="radio"
                          id="male"
                          value="male"
                          className=""
                          {...register("gender", {
                            required: {
                              value: true,
                              message: "Please select your gender",
                            },
                          })}
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        <label htmlFor="male">Female </label>

                        <input
                          type="radio"
                          id="male"
                          value="female"
                          className=""
                          {...register("gender", {
                            required: {
                              value: true,
                              message: "Please select your gender",
                            },
                          })}
                        />
                      </div>
                      {errors.gender && (
                        <p className="flex items-center gap-1 text-sm text-red-600">
                          <MdErrorOutline />
                          {errors.gender.message}
                        </p>
                      )}
                    </div>
                  </section>
                )}

                {formPart >= 1 && (
                  <section className={formPart === 1 ? "block" : "hidden"}>
                    <h2 className="font-semibold text-3xl mb-8">
                      Almost there 🙂...
                    </h2>

                    <div className="flex flex-col gap-2 pb-4">
                      <label htmlFor="dob" className="font-semibold">
                        Date of Birth
                      </label>
                      <input
                        {...register("dob", {
                          required: true,
                          validate: dateValidation,
                        })}
                        type="date"
                        id="dob"
                        className="form-control border p-2 rounded w-full"
                      />
                      {errors?.dob?.type === "required" && (
                        <p className="flex items-center gap-1 text-sm text-red-600">
                          <MdErrorOutline />
                          Please enter your date of birth
                        </p>
                      )}
                      {errors?.dob?.type === "validate" && (
                        <p className="flex items-center gap-1 text-sm text-red-600">
                          <MdErrorOutline />
                          You need to be 19 years or older
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-2 pb-4">
                      <label htmlFor="occupation" className="font-semibold">
                        Occupation
                      </label>
                      <Controller
                        name="occupation"
                        control={control}
                        rules={{ required: "Please choose an occupation" }}
                        render={({ field }) => (
                          <ReactSelect
                            isClearable
                            {...field}
                            options={[
                              { value: "chef", label: "Chef" },
                              { value: "developer", label: "Developer" },
                              {
                                value: "social_media",
                                label: "Social Media Infuencer",
                              },
                              { value: "yoga", label: "Yoga" },
                            ]}
                          />
                        )}
                      />
                      {errors.occupation && (
                        <p className="flex items-center gap-1 text-sm text-red-600">
                          <MdErrorOutline />
                          {errors.occupation.message}
                        </p>
                      )}
                    </div>
                  </section>
                )}

                {formPart >= 2 && (
                  <section className={formPart === 2 ? "block" : "hidden"}>
                    <h2 className="font-semibold text-3xl mb-8">
                      Pick Your Favourite Colour
                    </h2>

                    <div className="pb-6 ">
                      <div className="grid grid-cols-5 gap-4">
                        {colorData.map((inputdata, key) => (
                          <label htmlFor={inputdata.labeslname}>
                            <Inputs
                              type={inputdata.typesdata}
                              id={inputdata.ids}
                              value={inputdata.valuesdata}
                              className=""
                              register={register}
                              validation={{
                                required: {
                                  value: true,
                                  message: "Please select colour",
                                },
                              }}
                            />
                          </label>
                        ))}
                      </div>

                      {errors.color && (
                        <p className="flex items-center gap-1 text-sm text-red-600 pt-8">
                          <MdErrorOutline />
                          {errors.color.message}
                        </p>
                      )}
                    </div>
                  </section>
                )}

                {formPart === 3 && (
                  <section>
                    <h2 className="font-semibold text-3xl pb-8">Done...</h2>

                    <div className="flex flex-col items-center justify-center relative h-[80vh] md:h-[120vh]">
                      <div>{imageRender()}</div>

                      <div>{occupationRender(watch)}</div>
                      <Pants colour={watch().color} />
                    </div>

                    <Results
                      fullname={watch().fullname}
                      surname={watch().surname}
                      age={ageRender()}
                      occupation={watch().occupation.label}
                    />
                  </section>
                )}
                {btnRender()}
              </form>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default FormPage;
