export function NaujienaTitle({ title, type = 1 }) {
    type = type > 6 ? 6 : (type < 1 ? 1 : type);
    return `<h${type} class="text-2xl font-bold mb-4">${title}</h${type}>`;
}
