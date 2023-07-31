export function addCopyCodeButton() {
    const getTemplate = () => document.body.querySelector(".ods-theme")?.innerHTML?.
    replace(/(class="hydrated"|<!-*>|"\s>)/g, "").
    replace(/(<[\w-\s]+slot=.*?><\/[\w-\s]+>)/g, "").
    replace(/\s+/g, " ").
    replace(/>\s/g, ">").
    replace(/\s</g, "<");

    const code = document.createElement('osds-button');
    code.id = "system-copy-code";
    code.innerHTML = "Copy component";
    code.setAttribute("color", "primary");
    code.setAttribute("size", "sm");
    code.onclick = () => {
        navigator.clipboard.writeText(getTemplate() || "");
    }
    document.head.insertAdjacentHTML("beforeend", `
        <style>
          osds-button#system-copy-code {
            inset: auto 0 0 auto;
            position: fixed;
            --ods-size-button-border-radius: var(--ods-size-button-sm-border-radius) 0 0 0;
          }
        </style>
      `);
    return code;
}
