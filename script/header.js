const header = document.getElementById("header");
header.innerHTML = "<table>\n" +
    "            <tr>\n" +
    "                <td>\n" +
    "                    <a href=\"index.html\"><img src=\"images/antisoph.png\" alt=\"The logo for Antisoph\"></a>\n" +
    "                </td>\n" +
    "                <td>\n" +
    "                    <h1>Antisoph</h1>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </table>\n" +
    "\n" +
    "        <ul>\n" +
    "            <li><a href=\"index.html\">Home</a></li>\n" +
    "            <li><a href=\"todolist.html\">TODO list</a></li>\n" +
    "        </ul>";

header.setAttribute("class", "header");