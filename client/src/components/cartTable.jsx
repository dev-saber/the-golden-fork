import React from "react";
import TableRow from "../layouts/order/tableRow";
import { motion } from "framer-motion";

function CartTable({ order, total, action, actionText }) {
  return (
    <div className="flex flex-col items-center gap-4 w-3/5 mx-auto">
      <div className="overflow-x-auto max-w-sm md:max-w-max">
        <table className="border-2 border-goldenYellow text-sm text-left sm:rounded-lg">
          <thead className="text-lg text-center font-yellowtail text-goldenYellow">
            <tr>
              <th className="px-6 py-3">Product</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Quantity</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {order.map((order) => (
              <TableRow
                id={order.id}
                meal={order.name}
                price={order.price}
                count={order.quantity}
              />
            ))}
          </tbody>
          <tfoot>
            <tr className="font-semibold text-white">
              <th scope="row" className="px-6 py-3 text-base col-span-2">
                Total
              </th>
              <td className="px-6 py-3"></td>
              <td className="px-6 py-3">{`${total} MAD`}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <motion.p
        whileTap={{
          scale: 0.8,
        }}
        className="font-poppins text-goldenYellow font-bold text-center cursor-pointer hover:underline md:text-xl"
        onClick={action}
      >
        {actionText}
      </motion.p>
    </div>
  );
}

export default CartTable;
