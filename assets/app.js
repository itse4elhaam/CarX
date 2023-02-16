const s = function () {
	const r = document.createElement("link").relList;
	if (r && r.supports && r.supports("modulepreload")) return;
	for (const t of document.querySelectorAll('link[rel="modulepreload"]'))
		a(t);
	new MutationObserver((t) => {
		for (const e of t)
			if (e.type === "childList")
				for (const i of e.addedNodes)
					i.tagName === "LINK" && i.rel === "modulepreload" && a(i);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(t) {
		const e = {};
		return (
			t.integrity && (e.integrity = t.integrity),
			t.referrerpolicy && (e.referrerPolicy = t.referrerpolicy),
			t.crossorigin === "use-credentials"
				? (e.credentials = "include")
				: t.crossorigin === "anonymous"
				? (e.credentials = "omit")
				: (e.credentials = "same-origin"),
			e
		);
	}
	function a(t) {
		if (t.ep) return;
		t.ep = !0;
		const e = n(t);
		fetch(t.href, e);
	}
};
s();
const c = document.querySelectorAll(".menu"),
	l = document.querySelectorAll(".cross");
c.forEach((o) => {
	o.addEventListener("click", () => {
		console.log(o),
			console.log(o.nextElementSibling.classList),
			o.nextElementSibling.classList.remove("hidden");
	});
});
l.forEach((o) => {
	o.addEventListener("click", () => {
		o.parentElement.classList.add("hidden");
	});
});
