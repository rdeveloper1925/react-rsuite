import React from "react";
import { Stack } from "rsuite";
import { WidgetCards } from "../Components/Utilities";
import { MdOutlineInventory2 } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Dashboard() {
  return (
    <>
      <Stack
        wrap
        spacing={5}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <WidgetCards style={{ backgroundColor: "orange" }}>
          <MdOutlineInventory2 size="26px" />
          <br />
          <h4>
            90
            <br /> Products
          </h4>
        </WidgetCards>
        <WidgetCards style={{ backgroundColor: "orange" }}>
          <MdOutlineInventory2 size="26px" />
          <br />
          <h4>
            90
            <br /> Products
          </h4>
        </WidgetCards>
        <WidgetCards style={{ backgroundColor: "orange" }}>
          <MdOutlineInventory2 size="26px" />
          <br />
          <h4>
            90
            <br /> Products
          </h4>
        </WidgetCards>
        <WidgetCards style={{ backgroundColor: "orange" }}>
          <GrServices size="26px" />
          <br />
          <h4>
            193
            <br /> Services
          </h4>
        </WidgetCards>
        <WidgetCards style={{ backgroundColor: "orange" }}>
          <AiOutlineShoppingCart size="26px" />
          <br />
          <h4>
            412
            <br /> Orders
          </h4>
        </WidgetCards>
        <WidgetCards style={{ backgroundColor: "orange" }}>
          <MdOutlineInventory2 size="26px" />
          <br />
          <h4>
            90
            <br /> Inventory
          </h4>
        </WidgetCards>
      </Stack>
    </>
  );
}

export default Dashboard;
