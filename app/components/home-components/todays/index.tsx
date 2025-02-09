"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { useAxios } from "@/app/hooks/useAxios";

const Todays = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const axios = useAxios();
    axios({
      url: "products",
    }).then((data) => setData(data));
  }, []);

  const filterProduct = (order: string) => {
    const axios = useAxios();
    axios({
      url: `products/category/${order}`,
    }).then((data) => setData(data));
  };
  console.log(data);
  return (
    <section className="todays ">
      <div className="filter bg-white">
        <div className="w-[90%] m-auto filter flex items-center justify-center gap-5 py-4">
          <button
            onClick={() => {
              filterProduct("women's clothing");
            }}
            className="filter-item flex items-center justify-center w-[124px] h-[39px] bg-[#f5f5f5] rounded-[34px]"
          >
            For women's
          </button>

          <button
            onClick={() => {
              filterProduct("men's clothing");
            }}
            className="filter-item flex items-center justify-center w-[124px] h-[39px] bg-[#f5f5f5] rounded-[34px]"
          >
            For men's
          </button>
          <button
            onClick={() => {
              filterProduct("electronics");
            }}
            className="filter-item flex items-center justify-center w-[124px] h-[39px] bg-[#f5f5f5] rounded-[34px]"
          >
            Electronics
          </button>

          <button
            onClick={() => {
              filterProduct("jewelery");
            }}
            className="filter-item flex items-center justify-center w-[124px] h-[39px] bg-[#f5f5f5] rounded-[34px]"
          >
            Jewelery
          </button>

          <button className="text-[20px] text-[#696969]">
            <FaBars />
          </button>
        </div>
      </div>

      <div className="productss bg-[#e6e5e5] ">
        <div className="w-[90%] m-auto flex flex-col gap-[40px] py-4">
          <h3>
            Today’s <span className="border-b-2 border-red-500 ">Deals</span>
          </h3>

          <div className="products-items grid grid-cols-2  md:grid-cols-4 gap-20 ">
            {data.map((value: any) => (
              <div
                key={value?.id}
                className="products-card w-[250px] h-[330px] flex flex-col justify-between"
              >
                <div className="card-top relative bg-white p-5 flex items-center justify-center h-[170px]">
                  <Image
                    src={`${value.image}`}
                    fill
                    alt="ims"
                  />
                </div>
                <div className="bg-[#d9d9d9] p-5 flex  flex-col gap-3">
                  <h3 className="font-[500] text-[16px]">
                    {value.title}
                  </h3>
                  <div className="card-bottom flex items-center justify-between ">
                    <h4 className="font-[700] text-[19px] line-through">
                      ₹28,990
                    </h4>
                    <button className="w-[120px] h-[36px] rounded-[14px] bg-[#7d7d7d]">
                      Buy Now!
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Todays;
