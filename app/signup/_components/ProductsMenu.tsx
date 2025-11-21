import { Menu } from "@base-ui-components/react/menu";
import Image from "next/image";
import chevron_left from "@/public/chevron-left.svg";

// TODO: Fix the annoying automatic accessibility focus. it wont seem to go away despite applying focus:outline-hidden to all <p> elements.
export default function ProductMenu() {
  return (
    <Menu.Root>
      <Menu.Trigger openOnHover className={"flex gap-x-1 items-center"}>
        <p className="focus:outline-hidden select-none">Products</p>
        <Image src={chevron_left} alt="Arrow" className="size-3 -rotate-90" />
      </Menu.Trigger>

      <Menu.Portal>
        <Menu.Positioner sideOffset={14}>
          <Menu.Popup
            className={
              "flex flex-col gap-y-1.5 p-2 border border-preply-green bg-white text-sm rounded-lg"
            }
          >
            <Menu.SubmenuRoot>
              <Menu.SubmenuTrigger>
                <p className="focus:outline-hidden select-none">Interview</p>
              </Menu.SubmenuTrigger>

              <Menu.Portal>
                <Menu.Positioner sideOffset={12}>
                  <Menu.Popup className="flex flex-col gap-y-1.5 p-2 border border-preply-green bg-white text-sm rounded-lg">
                    <Menu.Item>
                      <p className="focus:outline-hidden select-none">Job</p>
                    </Menu.Item>
                    <Menu.Item>
                      <p className="focus:outline-hidden select-none">
                        University Admission
                      </p>
                    </Menu.Item>
                    <Menu.SubmenuRoot>
                      <Menu.SubmenuTrigger>
                        <p className="focus:outline-hidden select-none">
                          Language Test
                        </p>
                      </Menu.SubmenuTrigger>
                      <Menu.Portal>
                        <Menu.Positioner sideOffset={12}>
                          <Menu.Popup className="flex flex-col gap-y-1.5 p-2 border border-preply-green bg-white text-sm rounded-lg">
                            <Menu.Item>
                              <p className="focus:outline-hidden select-none">
                                IELTS
                              </p>
                            </Menu.Item>
                            <Menu.Item>
                              <p className="focus:outline-hidden select-none">
                                TOEFL
                              </p>
                            </Menu.Item>
                            <Menu.Item>
                              <p className="focus:outline-hidden select-none">
                                GRE
                              </p>
                            </Menu.Item>
                          </Menu.Popup>
                        </Menu.Positioner>
                      </Menu.Portal>
                    </Menu.SubmenuRoot>
                  </Menu.Popup>
                </Menu.Positioner>
              </Menu.Portal>
            </Menu.SubmenuRoot>

            <Menu.SubmenuRoot>
              <Menu.SubmenuTrigger>
                <p className="focus:outline-hidden select-none">CV Builder</p>
              </Menu.SubmenuTrigger>

              <Menu.Portal>
                <Menu.Positioner sideOffset={12}>
                  <Menu.Popup className="flex flex-col gap-y-1.5 p-2 border border-preply-green text-sm rounded-lg">
                    <Menu.Item>
                      <p className="focus:outline-hidden select-none">
                        Create Your CV
                      </p>
                    </Menu.Item>
                    <Menu.SubmenuRoot>
                      <Menu.SubmenuTrigger>
                        <p className="focus:outline-hidden select-none">
                          Evaluate CV
                        </p>
                      </Menu.SubmenuTrigger>
                      <Menu.Portal>
                        <Menu.Positioner sideOffset={12}>
                          <Menu.Popup className="flex flex-col gap-y-1.5 p-2 border border-preply-green bg-white text-sm rounded-lg">
                            <Menu.Item>
                              <p className="focus:outline-hidden select-none">
                                ATS Checking
                              </p>
                            </Menu.Item>
                            <Menu.Item>
                              <p className="focus:outline-hidden select-none">
                                Score
                              </p>
                            </Menu.Item>
                            <Menu.Item>
                              <p className="focus:outline-hidden select-none">
                                Suggestions
                              </p>
                            </Menu.Item>
                          </Menu.Popup>
                        </Menu.Positioner>
                      </Menu.Portal>
                    </Menu.SubmenuRoot>
                  </Menu.Popup>
                </Menu.Positioner>
              </Menu.Portal>
            </Menu.SubmenuRoot>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}
