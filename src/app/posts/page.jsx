"use client";

import React from "react";
import useFetchPosts from "@/features/post/useFetchPosts";
import InputLabel from "@/components/InputLabel";
import TextInput from "@/components/TextInput";
import PrimaryButton from "@/components/PrimaryButton";
import InputError from "@/components/InputError";
import TextareaInput from "@/components/TextareaInput";
import { useFormik } from "formik";
import { useCreatePost } from "@/features/post/useCreatePost";
import swal from "sweetalert";
import Link from "next/link";

const page = () => {
  const {
    data: posts,
    isLoading: postsIsLoading,
    refetch: refetchPosts,
  } = useFetchPosts();

  const toastSuccess = () => {
    swal({
      title: "Success",
      text: "Post created successfully",
      icon: "success",
      button: "OK",
      timer: 3000,
    });
  };

  const toastError = () => {
    swal({
      title: "Error",
      text: "Something went wrong",
      icon: "error",
      button: "OK",
      timer: 3000,
    });
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
      image: "",
      author: "",
    },

    onSubmit: async () => {
      const { title, body, author, image } = formik.values;

      createPost({
        title,
        body,
        author,
        image,
      });

      formik.setFieldValue("title", "");
      formik.setFieldValue("body", "");
      formik.setFieldValue("author", "");
      formik.setFieldValue("image", "");
    },
  });

  const { mutate: createPost, isLoading: createPostIsLoading } = useCreatePost({
    onSuccess: () => {
      toastSuccess();
      refetchPosts();
    },

    onError: () => {
      toastError();
    },
  });

  const handleFormInput = (e) => {
    formik.setFieldValue(e.target.name, e.target.value);
  };

  const loading = () => {
    return (
      <tr>
        <td>
          <span className="loading loading-infinity loading-lg"></span>
        </td>
        <td>
          <span className="loading loading-infinity loading-lg"></span>
        </td>
        <td>
          <span className="loading loading-infinity loading-lg"></span>
        </td>
        <td>
          <span className="loading loading-infinity loading-lg"></span>
        </td>
        <td>
          <span className="loading loading-infinity loading-lg"></span>
        </td>
        <td>
          <span className="loading loading-infinity loading-lg"></span>
        </td>
        <td>
          <span className="loading loading-infinity loading-lg"></span>
        </td>
      </tr>
    );
  };

  const renderPosts = () => {
    return posts?.data.map((post) => {
      return (
        <tr
          key={post.id}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <th>
            <label>
              <input type="checkbox" className="checkbox ml-2 my-3" />
            </label>
          </th>
          <th
            scope="row"
            className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {post.id}
          </th>
          <td className="py-4">{post.title}</td>
          <td className="py-4">
            {post.body.length > 25
              ? `${post.body.substring(0, 25)}...`
              : post.body}
          </td>
          <td className="py-4">{post.image}</td>
          <td className="py-4">{post.author}</td>
          <td className="py-4 flex gap-2">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <Link href="#">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  <i className="fa fa-edit"></i>
                  Edit
                </button>
              </Link>
              <Link href="#">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  <svg
                    className="w-3 h-3 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                  </svg>
                  Delete
                </button>
              </Link>
            </div>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <div className="justify-center mx-auto pt-14 pb-4">
        <h1 className="text-3xl font-bold font-poppins text-center text-black">
          POST LIST
        </h1>
      </div>

      <div className="mx-4 overflow-x-auto overflow-y-hidden">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table table-xs">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox ml-2 my-3" />
                </label>
              </th>
              <th scope="col" className="py-3">
                ID
              </th>
              <th scope="col" className="py-3">
                Title
              </th>
              <th scope="col" className="py-3">
                Body
              </th>
              <th scope="col" className="py-3">
                Image
              </th>
              <th scope="col" className="py-3">
                Author
              </th>
              <th scope="col" className="py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {renderPosts()}
            {postsIsLoading && loading()}
          </tbody>
        </table>
      </div>
      <div className="pt-6 pb-14 mx-4 text-gray-900 dark:text-gray-100">
        <h3 className="mx-auto py-8 text-center text-2xl font-bold text-black">
          Tambahkan Postingan Baru
        </h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <InputLabel htmlFor="title" value="Title" />

            <TextInput
              onChange={handleFormInput}
              id="title"
              name="title"
              className="mt-1 block w-full"
              value={formik.values.title}
              autoComplete="title"
              required
            />

            <InputError className="mt-2" />
          </div>
          <div className="mb-4">
            <InputLabel htmlFor="body" value="Body" />

            <TextareaInput
              onChange={handleFormInput}
              id="body"
              name="body"
              className="mt-1 block w-full"
              value={formik.values.body}
              autoComplete="body"
              required
            />

            <InputError className="mt-2" />
          </div>
          <div className="mb-4">
            <InputLabel htmlFor="author" value="Author" />

            <TextInput
              onChange={handleFormInput}
              id="author"
              name="author"
              className="mt-1 block w-full"
              value={formik.values.author}
              autoComplete="author"
              required
            />

            <InputError className="mt-2" />
          </div>

          <div className="relative my-2 flex flex-col sm:flex-row sm:justify-between">
            <div className="sm:w-1/2 mini:mb-16 sm:mb-0 mini:w-full">
              <label htmlFor="image" className="block font-medium text-black">
                Image
              </label>
              <input
                onChange={handleFormInput}
                id="image"
                name="image"
                value={formik.values.image}
                type="file"
                accept="image/*"
                multiple
                className="file-input file-input-bordered file-input-md my-2 w-full max-w-xs bg-slate-300 text-color-dark placeholder:text-color-dark mini:w-full"
              />
            </div>
            <div className="sm:w-1/2">
              {createPostIsLoading ? (
                <span className="loading loading-spinner loading-lg"></span>
              ) : (
                <PrimaryButton
                  type="submit"
                  className="mx-auto mini:absolute mini:bottom-0 mini:right-0 my-2 h-12 max-h-12 w-full items-end justify-center px-6 text-center sm:max-w-32"
                >
                  Send
                </PrimaryButton>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
