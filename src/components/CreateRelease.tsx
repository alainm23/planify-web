import { db } from "@/services/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateRelease() {
  const [title, setTitle] = useState("");
  const [version, setVersion] = useState("");
  const [date, setDate] = useState("");
  const [items, setItems] = useState<any[]>([
    {
      value: "",
    },
  ]);

  const addInput = () => {
    setItems([...items, { value: "" }]);
  };

  const removeInput = (_index: number) => {
    setItems(items.filter((input, index) => index !== _index));
  };

  const handleInputChange = (index: any, event: any) => {
    const newInputs = items.map((input, _index) => {
      if (index === _index) {
        return { ...input, value: event.target.value };
      }

      return input;
    });
    setItems(newInputs);
  };

  const handleAction = async () => {
    // if (!title) {
    //   return;
    // }

    if (!version) {
      return;
    }

    if (!date) {
      return;
    }

    if (items.length <= 0) {
      return;
    }

    const _items = items.map((item: any) => item.value);

    addDoc(collection(db, "Releases"), {
      // title,
      version,
      date: new Date(date).toLocaleDateString("en-US"),
      items: _items,
    })
      .then(() => {
        window.location.href = "/whats-new";
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="flex flex-col">
        {/* <div className="w-full md:w-1/2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Titulo
          </label>

          <input
            type="text"
            id="title"
            name="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div> */}

        <div className="mt-6 w-full md:w-1/2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Version
          </label>
          <input
            type="text"
            name="version"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={version}
            onChange={(e) => setVersion(e.target.value)}
          />
        </div>

        <div className="mt-6 w-full md:w-1/2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Date
          </label>
          <input
            type="date"
            name="version"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="mt-6 w-full md:w-1/2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Features
          </label>

          {items.map((item, index) => {
            return (
              <div key={index} className="flex mt-6">
                <input
                  type="text"
                  name="version"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  value={item.value}
                  onChange={(event) => handleInputChange(index, event)}
                />
                <div className="flex">
                  <button
                    className="ms-4 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    onClick={() => removeInput(index)}
                  >
                    Eliminar
                  </button>
                  <button
                    className="ms-4 px-3 py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    type="button"
                    onClick={addInput}
                  >
                    Agregar
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 w-full md:w-1/3">
          <button
            onClick={handleAction}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full md:w-1/3"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
