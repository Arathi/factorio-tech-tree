factorio_data_path = "D:/Games/Factorio/data"
output_path = "../public"

pkg_dirs = {
    "base",
    "core/lualib",
    "core",
}

packages = ""
for pkg_index, pkg_dir in ipairs(pkg_dirs) do
    packages = packages .. ";" .. factorio_data_path .. "/" .. pkg_dir .. "/?.lua"
end
print("packages = " .. packages)

package.path = package.path .. packages
print("package.path = " .. package.path)

json = require("json")

require("dataloader")
require("util")

require("prototypes.item")
require("prototypes.item-groups")
require("prototypes.recipe")
require("prototypes.technology")

function export_json(file_name, prototype)
    prototypes = json.encode(data.raw[prototype])
    file = io.open(output_path .. "/" .. file_name, "w")
    io.output(file)
    io.write(prototypes)
    io.close(file)
    print(file_name .." exported.")
end

export_json("item.json", "item")
export_json("recipe.json", "recipe")
export_json("technology.json", "technology")
