
import CategoryProducts from "@/components/CategoryProducts/CategoryProducts";
import Container from "@/components/Container/Container";
import { Title } from "@/components/Text/Text";
import { getCategories } from "@/sanity/quaries";
import React from "react";

const CategoryPage = async (props: { params: Promise<{ slug: string }> }) => {
  const categories = await getCategories();
  const { slug } = await props.params;
  return (
    <div className="py-10">
      <Container>
        <Title>
          Products by Category:{" "}
          <span className="font-bold text-green-600 capitalize tracking-wide">
            {slug && slug}
          </span>
        </Title>
        <CategoryProducts categories={categories} slug={slug} />
      </Container>
    </div>
  );
};

export default CategoryPage;
