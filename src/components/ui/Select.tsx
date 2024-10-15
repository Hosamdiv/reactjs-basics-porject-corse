/* eslint-disable react-refresh/only-export-components */
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { categories } from "../../data"; // Adjust the path if necessary
import { ICategory } from "../../interfaces";
import { memo } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface IProps {
  selected: { name: string; imageURL: string };
  setSelected: (category: ICategory) => void;
}

const Select = ({ selected, setSelected }: IProps) => {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
            Category
          </Listbox.Label>
          <div className="relative">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-4 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <img
                  src={selected.imageURL || "default-image-url"} // Add a default image URL
                  alt={selected.name}
                  className="h-5 w-5 flex-shrink-0 rounded-full"
                />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {categories.map((category) => (
                <Listbox.Option
                  key={category.id}
                  className={({ active }) =>
                    classNames(
                      active ? "bg-indigo-600 text-white" : "text-gray-900",
                      "relative cursor-default select-none py-2 pl-3 pr-9"
                    )
                  }
                  value={category}
                >
                  {({ selected, active }) => (
                    <>
                      <div className="flex items-center">
                        <img
                          src={category.imageURL || "default-image-url"} // Add a default image URL
                          alt={category.name}
                          className="h-5 w-5 flex-shrink-0 rounded-full"
                        />
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "ml-3 block truncate"
                          )}
                        >
                          {category.name}
                        </span>
                      </div>

                      {selected && (
                        <span
                          className={classNames(
                            active ? "text-white" : "text-indigo-600",
                            "absolute inset-y-0 right-0 flex items-center pr-4"
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      )}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default memo(Select);
