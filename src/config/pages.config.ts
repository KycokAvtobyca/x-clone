class PagesConfig {
    PROFILE(username:string) {
        return `/profile/${username}`
    }

    HOME = "/"
    EXPLORE = "/explore"
    PROFILE_FAKE = "/profile-fake"
}

export const PAGES = new PagesConfig()