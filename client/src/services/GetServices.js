import $api from "../http/axios";

export default class GetServices {
  static async getUser() {
    const token = localStorage.getItem("token");
    const header = `Bearer ${token}`;

    return await $api.get("/api/user/user", {
      headers: { Authorization: header },
    });
  }
  static async getCategories() {
    return $api.get("/api/category");
  }
  static async getSubcategories() {
    return $api.get("/api/subcategory");
  }
  static async getAllProdacts(
    categoryId,
    subcategoryId,
    page,
    limit,
    orderBy,
    sortBy
  ) {
    return $api.get("/api/prodact", {
      params: { categoryId, subcategoryId, page, limit, orderBy, sortBy },
    });
  }
  static async getOneProdact(id) {
    return $api.get("/api/prodact/" + id);
  }
  static async getRating(prodactId) {
    return $api.get("/api/rating", { params: { prodactId } });
  }
  static async getCategory(id) {
    return $api.get("/api/category/getone", { params: { id } });
  }
  static async getSubcategory(id) {
    return $api.get("/api/subcategory/getone", { params: { id } });
  }
  static async checkVote(prodactId, userId) {
    return $api.get("/api/rating/check", { params: { prodactId, userId } });
  }

  static async getBasket(userId) {
    return $api.get("/api/basket/getone", { params: { userId } });
  }

  static async getAllOrders(limit, page, status) {
    return $api.get("/api/order/admin/getAll", {
      params: { userId: null, limit, page, status },
    });
  }
  static async getAllUsers() {
    const token = localStorage.getItem("token");
    const header = `Bearer ${token}`;
    return $api.get("/api/user/users", {
      headers: { Authorization: header },
    });
  }
}
